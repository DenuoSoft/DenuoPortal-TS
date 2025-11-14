import {Tabs} from '../components/Tabs/Tabs';
import {Info} from '../components/ITContent/Info';
import {Policies} from '../components/ITContent/Policies';
import {Procedures} from '../components/ITContent/Procedures';
import Loader from '../components/Loader/Loader';

export const It = () => {
  let isLoading = false;
  let isError = false;
  let infoContent;
  let PoliciesContent;
  let ProcedresContent;

  infoContent = <Info />;
  PoliciesContent = <Policies />;
  ProcedresContent = <Procedures />;
  const content = {
    Info: infoContent,
    Policies: PoliciesContent,
    Procedures: ProcedresContent,
  };

  const tabs = [{name: 'Info'}, {name: 'Policies'}, {name: 'Procedures'}];

  return (
    <Loader
      isLoading={isLoading}
      isError={isError}
      minDelay={500}
      maxDelay={900}
    >
      <Tabs tabs={tabs} content={content} />
    </Loader>
  );
};
