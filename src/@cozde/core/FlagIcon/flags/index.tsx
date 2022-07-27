import EnSvg from './EnIcon';
import ViSvg from './ViIcon';
import DeSvg from './DeIcon';

const instance: { [key: string]: React.ElementType<any> } = {
  en: EnSvg,
  vi: ViSvg,
  de: DeSvg,
};

export default instance;
