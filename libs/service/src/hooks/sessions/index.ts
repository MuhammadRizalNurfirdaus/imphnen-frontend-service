import { useQuery, useMutation, UseQueryOptions, UseMutationResult } from '@tanstack/react-query';
import { sessionService } from '../../api/sessions';
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
import { TResponseError } from '../../types/common';

// Query for user's sessions
export const useMySessions = (
    status?: string,
    options?: Omit<UseQueryOptions<SessionListResponseDto, TResponseError>, 'queryKey' | 'queryFn'>
) => {
    return useQuery({
        queryKey: ['my-sessions', status],
        queryFn: () => sessionService.getMySessions(status),
        ...options,
    });
};

// Query for mentor's sessions
export const useMentorSessions = (
    mentorId: string,
    status?: string,
    options?: Omit<UseQueryOptions<SessionListResponseDto, TResponseError>, 'queryKey' | 'queryFn'>
) => {
    return useQuery({
        queryKey: ['mentor-sessions', mentorId, status],
        queryFn: () => sessionService.getMentorSessions(mentorId, status),
        enabled: !!mentorId,
        ...options,
    });
};

// Query for mentor availability
export const useMentorAvailability = (
    mentorId: string,
    options?: Omit<UseQueryOptions<MentorAvailabilityDto, TResponseError>, 'queryKey' | 'queryFn'>
) => {
    return useQuery({
        queryKey: ['mentor-availability', mentorId],
        queryFn: () => sessionService.getMentorAvailability(mentorId),
        enabled: !!mentorId,
        ...options,
    });
};

// Mutation for booking a session
export const useBookSession = (): UseMutationResult<
    BookSessionResponseDto,
    TResponseError,
    { mentorId: string; data: BookSessionRequestDto },
    unknown
> => {
    return useMutation({
        mutationKey: ['book-session'],
        mutationFn: ({ mentorId, data }) => sessionService.bookSession(mentorId, data),
    });
};

// Mutation for updating session status
export const useUpdateSessionStatus = (): UseMutationResult<
    UpdateSessionStatusResponseDto,
    TResponseError,
    { sessionId: string; data: UpdateSessionStatusRequestDto },
    unknown
> => {
    return useMutation({
        mutationKey: ['update-session-status'],
        mutationFn: ({ sessionId, data }) => sessionService.updateSessionStatus(sessionId, data),
    });
};

// Mutation for submitting session feedback
export const useSubmitSessionFeedback = (): UseMutationResult<
    SessionFeedbackResponseDto,
    TResponseError,
    { sessionId: string; data: SessionFeedbackRequestDto },
    unknown
> => {
    return useMutation({
        mutationKey: ['submit-session-feedback'],
        mutationFn: ({ sessionId, data }) => sessionService.submitFeedback(sessionId, data),
    });
};
