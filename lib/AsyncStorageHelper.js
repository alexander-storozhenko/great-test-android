import SyncStorage from 'sync-storage';
export const storeData = (key, value) => {
    SyncStorage.set(key, value);
}

export const getData = (key) => {
    return SyncStorage.get(key)
}
