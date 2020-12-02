import React, {createContext} from 'react';
import {useLocalObservable, observer} from 'mobx-react-lite';

export const MyContext = createContext(null);

export const HookStore = observer((props) => {
  const store:any = useLocalObservable(() => (
    {
      count: 1,
      get getCount() {
        return store.count;
      },
      handleCount() {
        store.count += 2;
      },
      version: '1.0.0',
      get getVersion() {
        return store.version
      },
      handleVersion() {
        store.version = '1.0.01111';
      },


      personalSettingIsModalVisible: false,
      get getPersonalSettingIsModalVisible() {
        console.log(store.personalSettingIsModalVisible)
        return store.personalSettingIsModalVisible
      },
      handlePersonalSettingIsModalVisible(isVisible:boolean) {
        store.personalSettingIsModalVisible = isVisible;
      },


    }
  ));
  console.log(store,'store')
  return (
    <MyContext.Provider value={store}>
      {props.children}
    </MyContext.Provider>
  );
});
