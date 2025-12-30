export interface MentoringRate {
  amount: number;
  currency: string;
}

export interface MentorDetailResponseDto {
  availability_commitment: string;
  bio?: string | null;
  created_at: string;
  current_company: string;
  current_role: string;
  cv_url?: string | null;
  domicile?: string | null;
  email?: string | null;
  expertise: string[];
  fullname?: string | null;
  gender?: string | null;
  github_url?: string | null;
  id: string;
  industries: string[];
  languages: string[];
  last_education?: string | null;
  legal_name?: string | null;
  linkedin_url?: string | null;
  mentoring_rate: MentoringRate;
  phone_for_verification?: string | null;
  portfolio_url?: string | null;
  preferred_mentee_level: string[];
  preferred_mentoring_formats: string[];
  status: string;
  topics_of_interest: string[];
  updated_at: string;
  user_id: string;
  years_of_experience: number;
  mentoring_sessions?: number;
  rating?: number;
  experience?: Array<{
    id: string;
    company: string;
    position: string;
    duration: string;
    period: string;
  }>;
  education?: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    period: string;
  }>;
}

export interface MentorUpdateRequestDto {
  availability_commitment?: string | null;
  bio?: string | null;
  current_company?: string | null;
  current_role?: string | null;
  cv_url?: string | null;
  domicile?: string | null;
  expertise?: string[] | null;
  gender?: string | null;
  github_url?: string | null;
  industries?: string[] | null;
  languages?: string[] | null;
  last_education?: string | null;
  legal_name?: string | null;
  linkedin_url?: string | null;
  mentoring_rate_amount?: number | null;
  phone_for_verification?: string | null;
  portfolio_url?: string | null;
  preferred_mentee_level?: string[] | null;
  preferred_mentoring_formats?: string[] | null;
  topics_of_interest?: string[] | null;
  years_of_experience?: number | null;
  experience?: Array<{
    id: string;
    company: string;
    position: string;
    duration: string;
    period: string;
  }>;
  education?: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    period: string;
  }>;
}

export interface MentorRegisterRequestDto {
  current_role: string;
  current_company: string;
  years_of_experience: number;
  expertise: string[];
  industries: string[];
  languages: string[];
  bio: string;
  availability_commitment: string;
  preferred_mentoring_formats: string[];
  preferred_mentee_level: string[];
  topics_of_interest: string[];
  mentoring_rate_amount?: number | null;
  linkedin_url?: string | null;
  github_url?: string | null;
  portfolio_url?: string | null;
  cv_url?: string | null;
  phone_for_verification?: string | null;
  domicile?: string | null;
  last_education?: string | null;
  legal_name?: string | null;
  gender?: string | null;
}

export interface MentorRegisterResponseDto {
  id: string;
  user_id: string;
  status: string;
  message: string;
  created_at: string;
}

export interface MentorStatusResponseDto {
  id: string;
  user_id: string;
  status: 'pending' | 'approved' | 'rejected' | 'inactive';
  submitted_at: string;
  reviewed_at?: string | null;
  rejection_reason?: string | null;
}

