import create from "zustand";

interface IState {
  drop: boolean;
  setDropToggle: () => void;

  openMessageDiaolog: boolean;
  setOpenMessageDiaolog: (openMessageDiaolog: boolean) => void;

  targetPoint: {
    x: number;
    y: number;
    z: number;
  };

  targetSection: {
    aboutUs: boolean;
    timeline: boolean;
    featuredMember: boolean;
    community: boolean;
  };

  isTalking: boolean;
}

const useStore = create<IState>((set) => ({
  drop: false,
  openMessageDiaolog: false,

  setDropToggle: () =>
    set((state: IState) => ({
      drop: !state.drop,
    })),
  //
  targetPoint: {
    x: -10,
    y: 0,
    z: 0,
  },
  targetSection: {
    aboutUs: true,
    timeline: false,
    featuredMember: false,
    community: false,
  },
  setTargetPoint: (point: { x: number; y: number; z: number }) =>
    set(() => ({
      targetPoint: {
        ...point,
      },
    })),
  setTargetSection: (target: {
    aboutUs: boolean;
    timeline: boolean;
    featuredMember: boolean;
    community: boolean;
  }) =>
    set(() => ({
      targetSection: {
        ...target,
      },
    })),
  setOpenMessageDiaolog: (openMessageDiaolog: boolean) =>
    set(() => ({
      openMessageDiaolog: openMessageDiaolog,
    })),
  isTalking: false,
  setIsTalking: () =>
    set((state: IState) => ({
      isTalking: !state.isTalking,
    })),
}));

export default useStore;
