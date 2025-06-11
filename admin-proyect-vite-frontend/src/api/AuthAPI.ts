import api from '@/lib/axios';
import { isAxiosError } from 'axios';
import { ConfirmToken, UserRegistrationForm, RequestConfirmationCodeForm, UserLoginForm, ForgotPasswordForm} from '../types';

const createAccount = async (formData: UserRegistrationForm) => {
    try {
        const url = '/auth/create-account'
        const {data} = await api.post<string>(url, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

const confirmAccount = async (formData: ConfirmToken) => {
    try {
        const url = '/auth/confirm-account'
        const {data} = await api.post<string>(url, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

const requestConfirmationCode = async (formData: RequestConfirmationCodeForm) => {
    try {
        const url = '/auth/request-code'
        const {data} = await api.post<string>(url, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

const authenticaterUser = async (formData: UserLoginForm) => {
    try {
        const url = '/auth/login'
        const {data} = await api.post<string>(url, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

const ForgotPassword = async (formData: ForgotPasswordForm) => {
    try {
        const url = '/auth/forgot-password'
        const {data} = await api.post<string>(url, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export {createAccount, confirmAccount, requestConfirmationCode, authenticaterUser, ForgotPassword};