interface HotjarWindow extends Window {
    hj: (...args: any[]) => void;
    _hjSettings: { hjid: number; hjsv: number };
  }
  
declare var window: HotjarWindow;
  