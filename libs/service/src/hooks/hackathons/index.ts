import { useQuery, useMutation, UseQueryOptions, UseMutationResult } from '@tanstack/react-query';
import { hackathonService, HackathonQueryParams } from '../../api/hackathons';
import type {
    HackathonDto,
    HackathonListResponse,
    HackathonEventListResponse,
    HackathonTimelineListResponse,
    HackathonSubmissionListResponse,
    HackathonSubmissionDto,
    RegistrationRequestDto,
    RegistrationResponseDto,
    UserHackathonsResponseDto,
    HackathonSubmissionCreateRequestDto,
} from '../../types/hackathons';
import { TResponseError } from '../../types/common';

// Query for hackathon list
export const useHackathons = (
    params?: HackathonQueryParams,
    options?: Omit<UseQueryOptions<HackathonListResponse, TResponseError>, 'queryKey' | 'queryFn'>
) => {
    return useQuery({
        queryKey: ['hackathons', params],
        queryFn: () => hackathonService.getHackathons(params),
        ...options,
    });
};

// Query for hackathon by ID
export const useHackathonById = (
    id: string,
    options?: Omit<UseQueryOptions<HackathonDto, TResponseError>, 'queryKey' | 'queryFn'>
) => {
    return useQuery({
        queryKey: ['hackathon', id],
        queryFn: () => hackathonService.getHackathonById(id),
        enabled: !!id,
        ...options,
    });
};

// Query for user's hackathons
export const useMyHackathons = (
    options?: Omit<UseQueryOptions<UserHackathonsResponseDto, TResponseError>, 'queryKey' | 'queryFn'>
) => {
    return useQuery({
        queryKey: ['my-hackathons'],
        queryFn: () => hackathonService.getMyHackathons(),
        ...options,
    });
};

// Query for hackathon events
export const useHackathonEvents = (
    hackathonId: string,
    params?: HackathonQueryParams,
    options?: Omit<UseQueryOptions<HackathonEventListResponse, TResponseError>, 'queryKey' | 'queryFn'>
) => {
    return useQuery({
        queryKey: ['hackathon-events', hackathonId, params],
        queryFn: () => hackathonService.getHackathonEvents(hackathonId, params),
        enabled: !!hackathonId,
        ...options,
    });
};

// Query for hackathon timeline
export const useHackathonTimeline = (
    hackathonId: string,
    params?: HackathonQueryParams,
    options?: Omit<UseQueryOptions<HackathonTimelineListResponse, TResponseError>, 'queryKey' | 'queryFn'>
) => {
    return useQuery({
        queryKey: ['hackathon-timeline', hackathonId, params],
        queryFn: () => hackathonService.getHackathonTimeline(hackathonId, params),
        enabled: !!hackathonId,
        ...options,
    });
};

// Query for hackathon submissions
export const useHackathonSubmissions = (
    hackathonId: string,
    params?: HackathonQueryParams,
    options?: Omit<UseQueryOptions<HackathonSubmissionListResponse, TResponseError>, 'queryKey' | 'queryFn'>
) => {
    return useQuery({
        queryKey: ['hackathon-submissions', hackathonId, params],
        queryFn: () => hackathonService.getHackathonSubmissions(hackathonId, params),
        enabled: !!hackathonId,
        ...options,
    });
};

// Mutation for registering to hackathon
export const useRegisterHackathon = (): UseMutationResult<
    RegistrationResponseDto,
    TResponseError,
    { hackathonId: string; data: RegistrationRequestDto },
    unknown
> => {
    return useMutation({
        mutationKey: ['register-hackathon'],
        mutationFn: ({ hackathonId, data }) => hackathonService.registerHackathon(hackathonId, data),
    });
};

// Mutation for creating submission
export const useCreateSubmission = (): UseMutationResult<
    HackathonSubmissionDto,
    TResponseError,
    { hackathonId: string; teamId: string; data: HackathonSubmissionCreateRequestDto },
    unknown
> => {
    return useMutation({
        mutationKey: ['create-submission'],
        mutationFn: ({ hackathonId, teamId, data }) => hackathonService.createSubmission(hackathonId, teamId, data),
    });
};

// Mutation for updating submission
export const useUpdateSubmission = (): UseMutationResult<
    HackathonSubmissionDto,
    TResponseError,
    { submissionId: string; data: Partial<HackathonSubmissionCreateRequestDto> },
    unknown
> => {
    return useMutation({
        mutationKey: ['update-submission'],
        mutationFn: ({ submissionId, data }) => hackathonService.updateSubmission(submissionId, data),
    });
};

// Mutation for submitting a submission
export const useSubmitSubmission = (): UseMutationResult<
    HackathonSubmissionDto,
    TResponseError,
    string,
    unknown
> => {
    return useMutation({
        mutationKey: ['submit-submission'],
        mutationFn: (submissionId) => hackathonService.submitSubmission(submissionId),
    });
};
