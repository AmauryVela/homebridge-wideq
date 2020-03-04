import { DeviceInfo, WasherDevice, WasherStatus } from 'wideq';
import { WideQ } from '../index';
import { AccessoryParser } from './accessory';

export class WasherParser extends AccessoryParser {
  constructor(
    public platform: WideQ,
    public accessoryType: string,
  ) {
    super(platform, accessoryType);
  }

  public getAccessoryCategory(device: DeviceInfo): any {
    return this.platform.Accessory.Categories.OTHER;
  }

  public getAccessoryInformation(device: DeviceInfo): any {
    return {
      'Manufacturer': 'LG',
      'Model': device.modelId,
      'SerialNumber': device.id,
    };
  }

  public parserAccessories(device: WasherDevice, status?: WasherStatus) {
    const uuid = this.getAccessoryUUID(device.device.id);
    const accessory = this.platform.AccessoryUtil.getByUUID(uuid);
    if (!accessory) return;

    this.createService(
      accessory,
      'Power',
      this.platform.Service.Switch,
      this.platform.Characteristic.On,
      status?.isOn,
      device.setOn
    );
  }
}
