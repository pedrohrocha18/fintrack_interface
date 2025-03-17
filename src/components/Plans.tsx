import plan1 from "../assets/imgs/plan_1.png";
import plan2 from "../assets/imgs/plan_2.png";
import plan3 from "../assets/imgs/plan_3.png";
import {
  PlansContainer,
  PlanCard,
} from "../components/styles/stylescomponents";

const plans = [
  {
    name: "Básico",
    benefits: ["Acesso limitado", "Suporte por e-mail", "1 usuário"],
    color: "#4A90E2",
    image: plan1,
    price: "GRATUITO",
  },
  {
    name: "Padrão",
    benefits: ["Acesso completo", "Suporte prioritário", "5 usuários"],
    color: "#099B7A",
    image: plan2,
    price: "R$ 19,90",
  },
  {
    name: "Premium",
    benefits: ["Acesso VIP", "Suporte 24/7", "Usuários ilimitados"],
    color: "#F5A623",
    image: plan3,
    price: "R$ 34,90",
  },
];

const PlanBenefits = () => {
  return (
    <PlansContainer>
      {plans.map((plan, index) => (
        <PlanCard key={index} color={plan.color}>
          <img src={plan.image} alt={plan.name} />
          <h3>{plan.name}</h3>
          <p>{plan.price}/mês</p>
          <ul>
            {plan.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
          <button>
            <a href="/create">Assinar Agora</a>
          </button>
        </PlanCard>
      ))}
    </PlansContainer>
  );
};

export default PlanBenefits;
