import { ApiResponse } from 'interfaces/interfaces';

export function sendResponseUtility<Type>(
  data: Type,
  error: any = null,
): ApiResponse<Type> {
  if (error) {
    return {
      success: false,
      data: null as Type | null,
      error: { message: error },
    };
  }
  return {
    success: true,
    data,
    error: null,
  };
}
