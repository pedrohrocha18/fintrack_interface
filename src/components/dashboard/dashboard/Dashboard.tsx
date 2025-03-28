import { DashboardContainer, SummaryContainer, Card } from "./styles";
import { Sidebar } from "../sidebar/Sidebar";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

const DashboardComp = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <SummaryContainer>
        <Card>
          <div className="icon-container">
            <DollarSign size={24} />
          </div>
          <div>
            <h3>Saldo Total</h3>
            <p>R$ 12.345,67</p>
          </div>
        </Card>
        <Card>
          <div className="icon-container">
            <TrendingUp size={24} color="green" />
          </div>
          <div>
            <h3>Receitas</h3>
            <p>R$ 8.765,43</p>
          </div>
        </Card>
        <Card>
          <div className="icon-container">
            <TrendingDown size={24} color="red" />
          </div>
          <div>
            <h3>Despesas</h3>
            <p>R$ 4.321,09</p>
          </div>
        </Card>
      </SummaryContainer>
    </DashboardContainer>
  );
};

export default DashboardComp;
