// Types for Hackathons matching backend OpenAPI spec

export type HackathonStatus =
    | 'Draft'
    | 'RegistrationOpen'
    | 'RegistrationClosed'
    | 'InProgress'
    | 'Judging'
    | 'Completed'
    | 'Cancelled';

export type HackathonPhase =
    | 'Registration'
    | 'Ideation'
    | 'Development'
    | 'Submission'
    | 'Judging'
    | 'Awards';

export type HackathonEventType =
    | 'Workshop'
    | 'Keynote'
    | 'Networking'
    | 'Judging'
    | 'Ceremony'
    | 'Other';

export type SubmissionStatus =
    | 'Draft'
    | 'Submitted'
    | 'Accepted'
    | 'UnderReview'
    | 'Shortlisted'
    | 'Winner'
    | 'Rejected';

export type RegistrationStatus =
    | 'pending'
    | 'approved'
    | 'rejected'
    | 'waitlisted'
    | 'cancelled';

export type ParticipantRole =
    | 'individual'
    | 'teamleader'
    | 'teammember';

export interface PrizeDto {
    position: number;
    title: string;
    description?: string | null;
    value?: string | null;
}

export interface WinnerDto {
    position: number;
    team_id: string;
    project_name: string;
    team_name?: string | null;
}

export interface HackathonDto {
    id: string;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    registration_deadline: string;
    status: HackathonStatus;
    organizers: string[];
    is_deleted: boolean;
    theme?: string | null;
    rules?: string | null;
    max_participants?: number | null;
    prizes?: PrizeDto[] | null;
    previous_winners?: WinnerDto[] | null;
    created_at?: string | null;
    updated_at?: string | null;
}

export interface HackathonEventDto {
    id: string;
    hackathon_id: string;
    title: string;
    event_type: HackathonEventType;
    start_time: string;
    end_time: string;
    is_mandatory: boolean;
    is_deleted: boolean;
    description?: string | null;
    location?: string | null;
    virtual_link?: string | null;
    max_attendees?: number | null;
    created_at?: string | null;
    updated_at?: string | null;
}

export interface HackathonTimelineDto {
    id: string;
    hackathon_id: string;
    phase: HackathonPhase;
    title: string;
    start_date: string;
    end_date: string;
    is_active: boolean;
    order: number;
    is_deleted: boolean;
    description?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
}

export interface HackathonSubmissionDto {
    id: string;
    hackathon_id: string;
    team_id: string;
    project_name: string;
    description: string;
    technologies: string[];
    status: SubmissionStatus;
    submitted_at: string;
    is_deleted: boolean;
    repository_url?: string | null;
    demo_url?: string | null;
    slides_url?: string | null;
    upload_file_url?: string | null;
    judge_feedback?: string | null;
    contact_linkedin?: string | null;
    contact_twitter?: string | null;
    contact_instagram?: string | null;
    contact_facebook?: string | null;
    contact_tiktok?: string | null;
    contact_youtube?: string | null;
    contact_other?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
}

export interface RegistrationRequestDto {
    role?: ParticipantRole | null;
    team_id?: string | null;
    skills?: string[] | null;
    experience_level?: string | null;
    motivation?: string | null;
    portfolio_url?: string | null;
    github_username?: string | null;
    dietary_requirements?: string | null;
    tshirt_size?: string | null;
    emergency_contact_name?: string | null;
    emergency_contact_phone?: string | null;
}

export interface RegistrationResponseDto {
    id: string;
    hackathon_id: string;
    user_id: string;
    status: RegistrationStatus;
    role: ParticipantRole;
    registration_date: string;
    checked_in: boolean;
    message: string;
    team_id?: string | null;
}

export interface UserHackathonDto {
    registration_id: string;
    hackathon_id: string;
    status: RegistrationStatus;
    role: ParticipantRole;
    registration_date: string;
    checked_in: boolean;
    hackathon_name?: string | null;
    hackathon_description?: string | null;
    start_date?: string | null;
    end_date?: string | null;
    team_id?: string | null;
    team_name?: string | null;
}

export interface UserHackathonsResponseDto {
    hackathons: UserHackathonDto[];
    total: number;
}

export interface HackathonSubmissionCreateRequestDto {
    project_name: string;
    description: string;
    technologies: string[];
    repository_url?: string | null;
    demo_url?: string | null;
    slides_url?: string | null;
    upload_file_url?: string | null;
    contact_linkedin?: string | null;
    contact_twitter?: string | null;
    contact_instagram?: string | null;
    contact_facebook?: string | null;
    contact_tiktok?: string | null;
    contact_youtube?: string | null;
    contact_other?: string | null;
}

export interface MetaResponseDto {
    page?: number | null;
    per_page?: number | null;
    total?: number | null;
}

export interface HackathonListResponse {
    data: HackathonDto[];
    meta?: MetaResponseDto | null;
}

export interface HackathonEventListResponse {
    data: HackathonEventDto[];
    meta?: MetaResponseDto | null;
}

export interface HackathonTimelineListResponse {
    data: HackathonTimelineDto[];
    meta?: MetaResponseDto | null;
}

export interface HackathonSubmissionListResponse {
    data: HackathonSubmissionDto[];
    meta?: MetaResponseDto | null;
}
