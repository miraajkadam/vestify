import axios, { AxiosInstance, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export interface SignUpData {
  username: string
  email: string
  password: string
  accountType: string
}

// interface VCData {
//   id: string;
//   name: string;
//   description: string;
//   logoBase64: string;
//   subscriptionFee: number;
//   tags: string[];
//   kycDone: boolean;
// }

export interface ProjectInfo {
  name: string
  category: string
  description: string
  round: string
  vcId: string
}

export interface TokenMetrics {
  allocation: string
  fdv: string
  price: string
  tgeUnlock: string
  tge: string
  vesting: string
}

export interface Deals {
  maximum: number
  minimum: number
  acceptedTokens: string
  poolFee: number
}

export interface TeamMember {
  description: string
  name: string
  title: string
}

export interface Partner {
  name: string
  logoBase64: string | null
}

export interface ProjectSocials {
  x?: string
  instagram?: string
  discord?: string
  telegram?: string
  medium?: string
  youtube?: string
}

export interface ProjectData {
  info: ProjectInfo
  tokenMetrics: TokenMetrics
  deals: Deals
  teamAndAdvisors: TeamMember[]
  partnersAndInvestors: Partner[]
  projectSocials: ProjectSocials
}
export interface VCProfile {
  name: string
  description: string
  logoBase64: string
  subscriptionFee: string
  tags: string[]
  kycDone: boolean
  fundSize: string

  projects: {
    id: string
    name: string
    pledgeAmount: string
    marketCap: string
    topGainer: string
    raisedAmount: string
    ongoingClaim: number
  }[]
}

export interface USERProfile {
  name: string
  description: string
  logoBase64: string
  subscriptionFee: string
  tags: string[]
  kycDone: boolean
  fundSize: string

  projects: {
    id: string
    name: string
    pledgeAmount: string
    marketCap: string
    topGainer: string
    raisedAmount: string
    ongoingClaim: number
  }[]
}

interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

// interface CreateVCResponse {
//   vcId: string;
// }

interface DecodedToken {
  user: {
    id: string
  }
  iat: number
}

export interface Project {
  id: string
  name: string
  description: string
  round: string
}

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor for adding auth token
api.interceptors.request.use(
  config => {
    const token = Cookies.get('access_token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

// Response interceptor for handling errors
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('API Error:', error.response.data)
      throw new Error(error.response.data.message || 'An error occurred')
    } else if (error.request) {
      console.error('No response received:', error.request)
      throw new Error('No response received from server')
    } else {
      console.error('Error setting up request:', error.message)
      throw error
    }
  }
)

export const signUp = async (data: SignUpData): Promise<ApiResponse<{ access_token: string }>> => {
  const response = await api.post<ApiResponse<{ access_token: string }>>('api/auth/signup', data)
  return response.data
}

// export const createVC = async (
//   data: VCData
// ): Promise<ApiResponse<CreateVCResponse>> => {
//   try {
//     console.log("Calling createVC API with data:", data);
//     const response = await api.post<ApiResponse<CreateVCResponse>>(
//       "/api/vc/new",
//       data
//     );
//     console.log("createVC API response:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error in createVC API call:", error);
//     throw error;
//   }
// };

// export const createProject = async (
//   data: Omit<ProjectData, "info"> & { info: Omit<ProjectInfo, "vcId"> }
// ): Promise<AxiosResponse<ApiResponse<{ project: ProjectData }>>> => {
//   const token = Cookies.get("access_token");
//   if (!token) {
//     throw new Error("No access token found");
//   }

//   const decodedToken = jwtDecode<DecodedToken>(token);
//   const vcId = decodedToken.user.id;

//   const projectData: ProjectData = {
//     ...data,
//     info: {
//       ...data.info,
//       vcId,
//     },
//   };

//   return api.post<ApiResponse<{ project: ProjectData }>>(
//     "api/project/new",
//     projectData
//   );
// };

export interface LoginData {
  email: string
  password: string
}

export interface LoginResponse {
  success: boolean
  message: string
  data?: {
    access_token: string
  }
}

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('api/auth/login', data)
  return response.data
}

export const getVCProfile = async (): Promise<ApiResponse<VCProfile>> => {
  try {
    const token = Cookies.get('access_token')
    if (!token) {
      throw new Error('No access token found')
    }

    const decodedToken = jwtDecode<DecodedToken>(token)
    const vcId = decodedToken.user.id

    const response = await api.get<ApiResponse<VCProfile>>(`/api/vc/${vcId}/profile`)
    return response.data
  } catch (error) {
    console.error('Error fetching VC profile:', error)
    throw error
  }
}

export const logout = async (): Promise<ApiResponse<null>> => {
  try {
    const response = await api.post<ApiResponse<null>>('/api/auth/logout')
    if (response.data.success) {
      Cookies.remove('access_token')
    }
    return response.data
  } catch (error) {
    console.error('Error during logout:', error)
    throw error
  }
}

export const getVCProjects = async (vcId: string): Promise<ApiResponse<Project[]>> => {
  try {
    const response = await api.get<ApiResponse<Project[]>>(`/api/vc/${vcId}/projects`)
    return response.data
  } catch (error) {
    console.error('Error fetching VC projects:', error)
    throw error
  }
}

export const getUSERProfile = async (): Promise<ApiResponse<USERProfile>> => {
  try {
    const token = Cookies.get('access_token')
    if (!token) {
      throw new Error('No access token found')
    }

    const decodedToken = jwtDecode<DecodedToken>(token)
    const userId = decodedToken.user.id

    const response = await api.get<ApiResponse<VCProfile>>(`/api/user/${userId}/profile`)
    return response.data
  } catch (error) {
    console.error('Error fetching VC profile:', error)
    throw error
  }
}
