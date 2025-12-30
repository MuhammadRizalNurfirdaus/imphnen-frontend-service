// Types for Mentoring Sessions matching backend OpenAPI spec

export interface SessionListItemDto {
    id: string;
    mentor_id: string;
    mentee_id: string;
    topic: string;
    scheduled_at: string;
    duration_minutes: number;
    session_type: string;
    status: string;
    created_at: string;
    mentee_fullname?: string | null;
    mentee_email?: string | null;
    rating?: number | null;
}

export interface SessionListResponseDto {
    sessions: SessionListItemDto[];
    total: number;
}

export interface BookSessionRequestDto {
    topic: string;
    scheduled_at: string;
    description?: string | null;
    duration_minutes?: number | null;
    session_type?: string | null;
}

export interface BookSessionResponseDto {
    id: string;
    mentor_id: string;
    mentee_id: string;
    topic: string;
    scheduled_at: string;
    duration_minutes: number;
    session_type: string;
    status: string;
    created_at: string;
    description?: string | null;
}

export interface UpdateSessionStatusRequestDto {
    status: string;
    meeting_link?: string | null;
}

export interface UpdateSessionStatusResponseDto {
    id: string;
    status: string;
    updated_at: string;
    meeting_link?: string | null;
}

export interface SessionFeedbackRequestDto {
    feedback: string;
    rating: number;
}

export interface SessionFeedbackResponseDto {
    id: string;
    feedback: string;
    rating: number;
    submitted_at: string;
}

export interface MentorAvailabilityDto {
    mentor_id: string;
    availability_commitment: string;
    preferred_formats: string[];
    slots: AvailabilitySlotDto[];
    booked_dates: string[];
}

export interface AvailabilitySlotDto {
    date: string;
    time: string;
    available: boolean;
}
