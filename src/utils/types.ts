export interface ThemeProps {
  [x: string]: string;
}

export interface FileDataProps {
  [x: string]: string;
}

export interface FileContextProps {
  fileUrl: string;
  setFileUrl: React.Dispatch<React.SetStateAction<string>>;
  buttonState: boolean;
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>;
  fileList: File;
  setFileList: React.Dispatch<React.SetStateAction<File>>;
}

export interface ModalContextProps {
  onModal: boolean;
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModalUploadButton: string;
  setIsModalUploadButton: React.Dispatch<React.SetStateAction<string>>;
  keyEventTarget: string;
  setKeyEventTarget: React.Dispatch<React.SetStateAction<string>>;
}

export interface LoadingContextProps {
  loadingToogle: boolean;
  setLoadingToogle: React.Dispatch<React.SetStateAction<boolean>>;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

export interface ButtonStateProps {
  type: 'file' | 'button';
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface KeyEventTargetProps {
  keyEventTarget: string;
}
