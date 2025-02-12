import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { InputTooltip } from './InputTooltip';

export default { title: 'InputTooltip' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={InputTooltip} />;
}
