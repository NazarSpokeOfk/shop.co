export interface ApiResponse<Type> {
    success: boolean;
    data: Type | null;
    error: { message: string } | null;
}
