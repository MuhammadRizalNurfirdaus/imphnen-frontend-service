import { api, ApiResponse } from '../index';
import type {
    SessionListResponseDto,
    BookSessionRequestDto,
    BookSessionResponseDto,
    UpdateSessionStatusRequestDto,
    UpdateSessionStatusResponseDto,
    SessionFeedbackRequestDto,
    SessionFeedbackResponseDto,
    MentorAvailabilityDto,
} from '../../types/sessions';

export interface SessionService {
    getMySessions(status?: string): Promise<SessionListResponseDto>;
    getMentorSessions(mentorId: string, status?: string): Promise<SessionListResponseDto>;
    getMentorAvailability(mentorId: string): Promise<MentorAvailabilityDto>;
    bookSession(mentorId: string, data: BookSessionRequestDto): Promise<BookSessionResponseDto>;
    updateSessionStatus(sessionId: string, data: UpdateSessionStatusRequestDto): Promise<UpdateSessionStatusResponseDto>;
    submitFeedback(sessionId: string, data: SessionFeedbackRequestDto): Promise<SessionFeedbackResponseDto>;
}

export const sessionService: SessionService = {
    async getMySessions(status?: string) {
        const params = status ? { status } : {};
        const response = await api.get<ApiResponse<SessionListResponseDto>>('/users/me/sessions', { params });
        return response.data.data;
    },

    async getMentorSessions(mentorId: string, status?: string) {
        const params = status ? { status } : {};
        const response = await api.get<ApiResponse<SessionListResponseDto>>(`/mentors/${mentorId}/sessions`, { params });
        return response.data.data;
    },

    async getMentorAvailability(mentorId: string) {
        const response = await api.get<ApiResponse<MentorAvailabilityDto>>(`/mentors/${mentorId}/availability`);
        return response.data.data;
    },

    async bookSession(mentorId: string, data: BookSessionRequestDto) {
        const response = await api.post<ApiResponse<BookSessionResponseDto>>(`/mentors/${mentorId}/sessions/book`, data);
        return response.data.data;
    },

    async updateSessionStatus(sessionId: string, data: UpdateSessionStatusRequestDto) {
        const response = await api.put<ApiResponse<UpdateSessionStatusResponseDto>>(`/sessions/${sessionId}/status`, data);
        return response.data.data;
    },

    async submitFeedback(sessionId: string, data: SessionFeedbackRequestDto) {
        const response = await api.post<ApiResponse<SessionFeedbackResponseDto>>(`/sessions/${sessionId}/feedback`, data);
        return response.data.data;
    },
};

export * from '../../types/sessions';
