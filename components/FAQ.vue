<template>
  <section id="faq" class="px-4 py-8 lg:py-16">
    <div class="container mx-auto max-w-4xl">
      <h2 class="mb-8 text-xl sm:text-2xl lg:text-3xl text-center text-white font-bold">
        Perguntas Frequentes
      </h2>
      
      <div class="space-y-6" itemscope itemtype="https://schema.org/FAQPage">
        <div v-for="(faq, index) in faqs" :key="index" 
             class="bg-backgroundGrayTwo rounded-lg p-6 shadow-lg"
             itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          
          <h3 class="text-lg font-semibold text-white mb-3" itemprop="name">
            {{ faq.question }}
          </h3>
          
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p class="text-grayWhite text-sm sm:text-base leading-relaxed" itemprop="text">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <nuxt-link to="https://t.me/MyBetSpacebot"
          class="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white rounded-md font-semibold transition-opacity hover:opacity-75"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.28 1.4-.04 1.4.84l-2.28 14.05c-.22.92-1.04 1.14-1.8.7l-4.95-3.64-2.4 2.3c-.27.27-.5.4-.85.4z"/>
          </svg>
          Ainda tem dúvidas? Fale conosco
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = ref([
  {
    question: "O que é gestão de banca e por que é importante no trade esportivo?",
    answer: "Gestão de banca é o controle sistemático do seu capital de apostas, definindo quanto investir em cada operação baseado no risco e potencial retorno. É fundamental para manter consistência, evitar perdas excessivas e maximizar lucros no longo prazo."
  },
  {
    question: "Como a My Bet Space automatiza a importação de apostas?",
    answer: "Nossa plataforma se conecta diretamente com APIs da Betfair e white labels parceiras, capturando automaticamente todas suas apostas, odds, resultados e dados em tempo real. Você não precisa inserir nenhuma informação manualmente, economizando horas de trabalho."
  },
  {
    question: "Quanto tempo leva para validar um método de trade com a plataforma?",
    answer: "Com nossa plataforma, você pode validar métodos em questão de dias ou semanas, comparado aos meses que levaria com planilhas tradicionais. Os indicadores automáticos mostram imediatamente onde você está ganhando ou perdendo dinheiro, acelerando o processo de otimização."
  },
  {
    question: "Posso usar a My Bet Space com qualquer casa de apostas?",
    answer: "Sim! Além da importação automática da Betfair e white labels integradas, você pode adicionar apostas manualmente de qualquer casa de apostas do mercado. A plataforma foi desenvolvida para ser compatível com todos os operadores."
  },
  {
    question: "Quais indicadores e relatórios a plataforma oferece?",
    answer: "Oferecemos indicadores completos como ROI, strike rate, curva de lucro, análise por método, esporte, mercado e período. Relatórios detalhados mostram performance por estratégia, permitindo identificar rapidamente os métodos mais lucrativos."
  },
  {
    question: "Como funciona o período de teste gratuito?",
    answer: "Todos os novos usuários têm direito a 7 dias gratuitos com acesso completo a todas as funcionalidades da plataforma. Não é necessário cartão de crédito para começar o teste. Você pode explorar todos os recursos sem qualquer compromisso."
  },
  {
    question: "A plataforma é segura? Como protegem meus dados?",
    answer: "Utilizamos criptografia de nível bancário e seguimos os mais rigorosos protocolos de segurança. Seus dados são armazenados em servidores seguros na nuvem e nunca compartilhados com terceiros. Cumprimos todas as normas de proteção de dados."
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento através da própria plataforma ou entrando em contato conosco. Não há taxas de cancelamento, multas contratuais ou períodos de fidelidade obrigatórios."
  }
])
</script>
