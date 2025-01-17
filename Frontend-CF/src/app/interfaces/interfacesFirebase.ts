export interface ResponseAuth {
    error: ResponseAuthError;
}

export interface ResponseAuthError {
    code:    number;
    message: string;
    errors:  ErrorElement[];
}

export interface ErrorElement {
    message: string;
    domain:  string;
    reason:  string;
}
export interface ResponseRegister {
    user:           User;
    providerId:     null;
    _tokenResponse: TokenResponse;
    operationType:  string;
}

export interface TokenResponse {
    kind:         string;
    localId:      string;
    email:        string;
    displayName:  string;
    idToken:      string;
    registered:   boolean;
    refreshToken: string;
    expiresIn:    string;
}

export interface User {
    uid:             string;
    email:           string;
    emailVerified:   boolean;
    isAnonymous:     boolean;
    providerData:    ProviderDatum[];
    stsTokenManager: StsTokenManager;
    createdAt:       string;
    lastLoginAt:     string;
    apiKey:          string;
    appName:         string;
}

export interface ProviderDatum {
    providerId:  string;
    uid:         string;
    displayName: null;
    email:       string;
    phoneNumber: null;
    photoURL:    null;
}

export interface StsTokenManager {
    refreshToken:   string;
    accessToken:    string;
    expirationTime: number;
}
