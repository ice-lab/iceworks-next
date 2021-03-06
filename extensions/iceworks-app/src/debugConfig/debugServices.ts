import { getDataFromSettingJson, saveDataToSettingJson } from '@iceworks/common-service';
import { projectPath } from '@iceworks/project-service';
import { getDevInfo } from '../utils/getDevServerStartInfo';

const debugServices = {
  async getDebugConfig() {
    const debugConfig = await getDataFromSettingJson('previewConfig', 'auto');
    return { debugConfig };
  },
  async getUserDevices() {
    const userDevices = await getDataFromSettingJson('customizePreviewDevices', []);
    return { userDevices };
  },
  async setUserDevices({ device }) {
    await saveDataToSettingJson('userDebugConfig.defaultDevice', device);
  },
  async autoSwitchDebugModel() {
    const devInfo = getDevInfo(projectPath) || { framework: 'unkown' };
    return devInfo.framework === 'rax';
  },
};

export default debugServices;
