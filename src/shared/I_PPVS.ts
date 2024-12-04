export interface I_PPV    {
    id: number,
    company: string,
    ppv_type: string,
    ppv_name: string,
    ppv: boolean,
    location: string,
    matches:         {
        titleDefense: boolean,
        title: string,
        wrestler1: string,
        wrestler2: string,
        mainEvent: boolean,
    }[]
  }