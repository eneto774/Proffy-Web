import React from "react";
import warningIcon from "../../assets/images/icons/warning.svg";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import "./styles.css";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulario de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciencias", label: "Ciencias" },
              { value: "Programação", label: "Programação" },
              { value: "Música", label: "Música" },
              { value: "Quimica", label: "Quimica" },
            ]}
          />
          <Input name="cost" label="Custo da sua hora/aula" />
        </fieldset>
        <fieldset>
          <legend>Horários Disponíveis</legend>
          <button> Novo hota</button>
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
