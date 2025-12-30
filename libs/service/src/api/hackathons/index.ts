import { api, ApiResponse } from '../index';
import type {
    HackathonDto,
    HackathonListResponse,
    HackathonEventDto,
    HackathonEventListResponse,
    HackathonTimelineDto,
    HackathonTimelineListResponse,
    HackathonSubmissionDto,
    HackathonSubmissionListResponse,
    RegistrationRequestDto,
    RegistrationResponseDto,
    UserHackathonsResponseDto,
    HackathonSubmissionCreateRequestDto,
} from '../../types/hackathons';

export interface HackathonQueryParams {
    page?: number;
    per_page?: number;
    search?: string;
    sort_by?: string;
    order?: 'ASC' | 'DESC';
    filter?: string;
    filter_by?: string;
}

export interface HackathonService {
    getHackathons(params?: HackathonQueryParams): Promise<HackathonListResponse>;
    getHackathonById(id: string): Promise<HackathonDto>;
    registerHackathon(hackathonId: string, data: RegistrationRequestDto): Promise<RegistrationResponseDto>;
    getMyHackathons(): Promise<UserHackathonsResponseDto>;
    getHackathonEvents(hackathonId: string, params?: HackathonQueryParams): Promise<HackathonEventListResponse>;
    getHackathonTimeline(hackathonId: string, params?: HackathonQueryParams): Promise<HackathonTimelineListResponse>;
    getHackathonSubmissions(hackathonId: string, params?: HackathonQueryParams): Promise<HackathonSubmissionListResponse>;
    createSubmission(hackathonId: string, teamId: string, data: HackathonSubmissionCreateRequestDto): Promise<HackathonSubmissionDto>;
    updateSubmission(submissionId: string, data: Partial<HackathonSubmissionCreateRequestDto>): Promise<HackathonSubmissionDto>;
    submitSubmission(submissionId: string): Promise<HackathonSubmissionDto>;
}

export const hackathonService: HackathonService = {
    async getHackathons(params?: HackathonQueryParams) {
        const response = await api.get<HackathonListResponse>('/hackathons', { params });
        return response.data;
    },

    async getHackathonById(id: string) {
        const response = await api.get<ApiResponse<HackathonDto>>(`/hackathons/${id}`);
        return response.data.data;
    },

    async registerHackathon(hackathonId: string, data: RegistrationRequestDto) {
        const response = await api.post<ApiResponse<RegistrationResponseDto>>(`/hackathons/${hackathonId}/register`, data);
        return response.data.data;
    },

    async getMyHackathons() {
        const response = await api.get<ApiResponse<UserHackathonsResponseDto>>('/users/me/hackathons');
        return response.data.data;
    },

    async getHackathonEvents(hackathonId: string, params?: HackathonQueryParams) {
        const response = await api.get<HackathonEventListResponse>(`/hackathons/${hackathonId}/events`, { params });
        return response.data;
    },

    async getHackathonTimeline(hackathonId: string, params?: HackathonQueryParams) {
        const response = await api.get<HackathonTimelineListResponse>(`/hackathons/${hackathonId}/timeline`, { params });
        return response.data;
    },

    async getHackathonSubmissions(hackathonId: string, params?: HackathonQueryParams) {
        const response = await api.get<HackathonSubmissionListResponse>(`/hackathons/${hackathonId}/submissions`, { params });
        return response.data;
    },

    async createSubmission(hackathonId: string, teamId: string, data: HackathonSubmissionCreateRequestDto) {
        const response = await api.post<ApiResponse<HackathonSubmissionDto>>(
            `/hackathons/${hackathonId}/teams/${teamId}/submissions`,
            data
        );
        return response.data.data;
    },

    async updateSubmission(submissionId: string, data: Partial<HackathonSubmissionCreateRequestDto>) {
        const response = await api.put<ApiResponse<HackathonSubmissionDto>>(`/hackathons/submissions/${submissionId}`, data);
        return response.data.data;
    },

    async submitSubmission(submissionId: string) {
        const response = await api.post<ApiResponse<HackathonSubmissionDto>>(`/hackathons/submissions/${submissionId}/submit`);
        return response.data.data;
    },
};

export * from '../../types/hackathons';
