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
        <nuxt-link to="http://wa.me/554899591818"
          class="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white rounded-md font-semibold transition-opacity hover:opacity-75"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
    answer: "Gestão de banca é o controle sistemático do seu capital de apostas, definindo quanto investir em cada operação baseado no risco e potencial retorno. É fundamental para manter consistência, evitar quebrar e maximizar lucros no longo prazo."
  },
  {
    question: "Como a My Bet Space automatiza a importação de apostas?",
    answer: "Nossa plataforma se conecta diretamente com APIs da Betfair e White Labels de exchanges(Bolsa de apostas, Odd Justa, FulltBet, BetBra) , sincronizando automaticamente todas suas apostas, odds, resultados e dados do que operou. Você não precisa inserir nenhuma informação manualmente, economizando horas de trabalho."
  },
  {
    question: "Quanto tempo leva para validar um método de trade com a plataforma?",
    answer: "Isso depende muito do volume de apostas, mas com nossa plataforma você pode validar métodos muito mais rápido, comparado aos meses que levaria com planilhas tradicionais. Os indicadores automáticos mostram facilmente onde você está ganhando ou perdendo dinheiro."
  },
  {
    question: "Posso usar a My Bet Space com qualquer casa de apostas?",
    answer: "Sim! Além da importação automática da Betfair e White Labels de exchanges integradas(Bolsa de apostas, Odd Justa, FulltBet, BetBra), você pode adicionar apostas de forma semi automatica de qualquer casa de apostas do mercado. A plataforma foi desenvolvida para ser compatível com todos os apostadores sejam traders ou punters."
  },
  {
    question: "Quais indicadores e relatórios a plataforma oferece?",
    answer: "Oferecemos indicadores completos, para analisar onde você perde ou ganha em cada cenário, análise por método, odds, esporte, mercado, período, até por dia da semana. Relatórios detalhados mostram performance por estratégia, permitindo identificar rapidamente os métodos que você tem mais potencial para ser lucrativo."
  },
  {
    question: "Como funciona o período de teste gratuito?",
    answer: "Todos os novos usuários têm direito a 7 dias gratuitos com acesso completo a todas as funcionalidades da plataforma. Não é necessário cartão de crédito para começar o teste. Você pode explorar todos os recursos sem qualquer compromisso, se liga, seguidamente tem promoções no nosso instagram."
  },
  {
    question: "A plataforma é segura? Como protegem meus dados?",
    answer: "Utilizamos criptografia de nível bancário e seguimos os mais rigorosos protocolos de segurança, somos autorizados e certificados pela Betfair, Bolsa de Apostas, Odd Justa, FulltBet, BetBra. Seus dados são armazenados em servidores seguros na nuvem e nunca compartilhados com terceiros. Cumprimos todas as normas de proteção de dados."
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento através da própria plataforma ou entrando em contato conosco. Não há taxas de cancelamento, multas contratuais ou períodos de fidelidade obrigatórios."
  }
])
</script>
