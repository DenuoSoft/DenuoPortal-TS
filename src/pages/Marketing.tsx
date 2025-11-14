import Loader from "../components/Loader/Loader";
import { Info } from "../components/MarketContent/Info";
import { Policies } from "../components/MarketContent/Policies";
import { Procedures } from "../components/MarketContent/Procedures";
import { Tabs } from "../components/Tabs/Tabs";

export const Marketing = () => {
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
}

