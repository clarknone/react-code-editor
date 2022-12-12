export interface ApiResponse {
  error?: string;
  statusCode: Number;
  output?: string;
  memory?: string;
  cpuTime?: string;
}


export interface LanguageOption {
    title: string;
    value: string;
    compileValue?: string;
  }
