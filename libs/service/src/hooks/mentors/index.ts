import { useQuery, useMutation, UseQueryResult, UseMutationResult, UseQueryOptions } from '@tanstack/react-query';
import { mentorService } from '../../api/mentors';
import {
  MentorDetailResponseDto,
  MentorUpdateRequestDto,
  MentorRegisterRequestDto,
  MentorRegisterResponseDto,
  MentorStatusResponseDto,
} from '../../types/mentors';
import { MentorAvailabilityDto } from '../../types/sessions';
import { TResponseError } from '../../types/common';

export const useMentorMe = (options?: UseQueryOptions<MentorDetailResponseDto, TResponseError>): UseQueryResult<MentorDetailResponseDto, TResponseError> => {
  return useQuery({
    queryKey: ['mentor-me'],
    queryFn: () => mentorService.getMentorMe(),
    ...options,
  });
};

export const useMentorById = (id: string, options?: UseQueryOptions<MentorDetailResponseDto, TResponseError>): UseQueryResult<MentorDetailResponseDto, TResponseError> => {
  return useQuery({
    queryKey: ['mentor-by-id', id],
    queryFn: () => mentorService.getMentorById(id),
    enabled: !!id,
    ...options,
  });
};

export const useUpdateMentorMe = (): UseMutationResult<
  MentorDetailResponseDto,
  TResponseError,
  MentorUpdateRequestDto,
  unknown
> => {
  return useMutation({
    mutationKey: ['update-mentor-me'],
    mutationFn: (data) => mentorService.updateMentorMe(data),
  });
};

export const useUpdateMentorById = (): UseMutationResult<
  MentorDetailResponseDto,
  TResponseError,
  { id: string; data: MentorUpdateRequestDto },
  unknown
> => {
  return useMutation({
    mutationKey: ['update-mentor-by-id'],
    mutationFn: ({ id, data }) => mentorService.updateMentorById(id, data),
  });
};

// Mentor registration mutation
export const useRegisterMentor = (): UseMutationResult<
  MentorRegisterResponseDto,
  TResponseError,
  MentorRegisterRequestDto,
  unknown
> => {
  return useMutation({
    mutationKey: ['register-mentor'],
    mutationFn: (data) => mentorService.registerMentor(data),
  });
};

// Mentor status query
export const useMentorStatus = (
  options?: Omit<UseQueryOptions<MentorStatusResponseDto, TResponseError>, 'queryKey' | 'queryFn'>
): UseQueryResult<MentorStatusResponseDto, TResponseError> => {
  return useQuery({
    queryKey: ['mentor-status'],
    queryFn: () => mentorService.getMentorStatus(),
    ...options,
  });
};

// Mentor availability query
export const useMentorAvailabilityById = (
  mentorId: string,
  options?: Omit<UseQueryOptions<MentorAvailabilityDto, TResponseError>, 'queryKey' | 'queryFn'>
): UseQueryResult<MentorAvailabilityDto, TResponseError> => {
  return useQuery({
    queryKey: ['mentor-availability', mentorId],
    queryFn: () => mentorService.getMentorAvailability(mentorId),
    enabled: !!mentorId,
    ...options,
  });
};

