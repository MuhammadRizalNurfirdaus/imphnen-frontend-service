import { api, ApiResponse } from '../index';
import type {
  MentorDetailResponseDto,
  MentorUpdateRequestDto,
  MentorRegisterRequestDto,
  MentorRegisterResponseDto,
  MentorStatusResponseDto,
} from '../../types/mentors';
import type { MentorAvailabilityDto } from '../../types/sessions';

export interface MentorService {
  getMentorMe(): Promise<MentorDetailResponseDto>;
  getMentorById(id: string): Promise<MentorDetailResponseDto>;
  updateMentorMe(data: MentorUpdateRequestDto): Promise<MentorDetailResponseDto>;
  updateMentorById(id: string, data: MentorUpdateRequestDto): Promise<MentorDetailResponseDto>;
  registerMentor(data: MentorRegisterRequestDto): Promise<MentorRegisterResponseDto>;
  getMentorStatus(): Promise<MentorStatusResponseDto>;
  getMentorAvailability(mentorId: string): Promise<MentorAvailabilityDto>;
}

export const mentorService: MentorService = {
  async getMentorMe() {
    const response = await api.get<ApiResponse<MentorDetailResponseDto>>('/mentors/me');
    return response.data.data;
  },

  async getMentorById(id: string) {
    const response = await api.get<ApiResponse<MentorDetailResponseDto>>(`/mentors/detail/${id}`);
    return response.data.data;
  },

  async updateMentorMe(data: MentorUpdateRequestDto) {
    const response = await api.put<ApiResponse<MentorDetailResponseDto>>('/mentors/update/me', data);
    return response.data.data;
  },

  async updateMentorById(id: string, data: MentorUpdateRequestDto) {
    const response = await api.put<ApiResponse<MentorDetailResponseDto>>(`/mentors/update/${id}`, data);
    return response.data.data;
  },

  async registerMentor(data: MentorRegisterRequestDto) {
    const response = await api.post<ApiResponse<MentorRegisterResponseDto>>('/mentors/register', data);
    return response.data.data;
  },

  async getMentorStatus() {
    const response = await api.get<ApiResponse<MentorStatusResponseDto>>('/mentors/status');
    return response.data.data;
  },

  async getMentorAvailability(mentorId: string) {
    const response = await api.get<ApiResponse<MentorAvailabilityDto>>(`/mentors/${mentorId}/availability`);
    return response.data.data;
  },
};

