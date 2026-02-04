export const USERS_API_BASE_URL = 'https://dummyjson.com';

export const DEFAULT_PAGINATION_PAGE_SIZE = 10;
export const PAGINATION_PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

export const Gender = {
	Male: 'male',
	Female: 'female',
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];

export const GENDER_OPTIONS = [Gender.Male, Gender.Female];
