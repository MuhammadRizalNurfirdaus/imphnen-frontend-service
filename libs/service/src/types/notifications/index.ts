// Types for Notifications matching backend OpenAPI spec

export interface NotificationDto {
    id: string;
    notification_type: string;
    title: string;
    message: string;
    is_read: boolean;
    created_at: string;
    read_at?: string | null;
    action_url?: string | null;
    related_id?: string | null;
}

export interface NotificationListResponseDto {
    notifications: NotificationDto[];
    total: number;
    unread_count: number;
    page: number;
    page_size: number;
}

export interface UnreadCountResponseDto {
    unread_count: number;
}

export interface MarkAsReadResponseDto {
    id: string;
    is_read: boolean;
    read_at: string;
    message: string;
}

export interface MarkAllAsReadResponseDto {
    updated_count: number;
    message: string;
}

export interface DeleteNotificationResponseDto {
    id: string;
    message: string;
}

export interface NotificationQueryParams {
    page?: number;
    page_size?: number;
    is_read?: boolean;
    notification_type?: string;
}
