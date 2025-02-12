import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { CurrencyInput } from './CurrencyInput';

export default { title: 'CurrencyInput' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={CurrencyInput} />;
}
