import { useEffect, useState } from 'react';
import type { UserProps } from '../types/users.types';
import { USERS_API_BASE_URL } from '../constants/users.constants';
import axios from 'axios';

export function useUsersApi() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    let isMounted = true;
    const abortController = new AbortController(); 

    async function fetchUsersOnMount() {
      setIsLoading(true);

      try {
        const response = await axios.get<{ users: UserProps[] }>(`${USERS_API_BASE_URL}/users`, {
          signal: abortController.signal, 
        });

        if (isMounted) {
          const mappedUsers = response.data.users.map(function (user: UserProps) {
            return {
              ...user,
              isActive: user.age < 50,
            };
          });

          setUsers(mappedUsers);
        }
      } catch (error) {
        if (isMounted && !axios.isCancel(error)) {
          console.error('Failed to load users', error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchUsersOnMount();

    return function () {
      isMounted = false;
      abortController.abort();
    };
  }, []);

  return {
    users,
    isLoading,
  };
}