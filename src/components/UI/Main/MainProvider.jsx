import { useState } from 'react';
import MainContext, { defaultMainData } from './MainContext';

export default function MainProvider(properties) {
  const {
		      sideBarState: defaultSideBarState,
		      sideBarOpts: defaultSideBarOptions,
		      overlayState: defaultOverlayState,
		      overlays: defaultOverlays,
	      } = defaultMainData;

  const { children } = properties;

  const [sideBarState, setSideBarState] = useState(defaultSideBarState);
  const [overlays, setOverlays] = useState(defaultOverlays);
  const [overlayState, setOverlayState] = useState(defaultOverlayState);
  const [sideBarOptions, setSideBarOptions] = useState(defaultSideBarOptions);

  return (
    <MainContext.Provider value={
      // eslint-disable-next-line react/jsx-no-constructed-context-values -- should be re-rendered every time that values are changed - this has effect on whole contained items perspective
      {
			  sideBarState,
			  setSideBarState,
			  sideBarOpts: sideBarOptions,
			  setSideBarOpts: setSideBarOptions,
			  overlayState,
			  setOverlayState,
			  overlays,
			  setOverlays,
      }
    }
    >
      {children}
    </MainContext.Provider>
  );
}
