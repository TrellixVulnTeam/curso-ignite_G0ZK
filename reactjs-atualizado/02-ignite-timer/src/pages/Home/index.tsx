import { Play } from "phosphor-react";
import { useState } from "react";

import { 
        CountdownContainer, 
        FormContainer, 
        HomeContainer, 
        MinutesAmountInput, 
        Separetor, 
        StartCountdownButton, 
        TaskInput 
    } from "./styles";
    

export function Home() {

    const [task, setTask] = useState('');

    function handleSubmit(event) {
        event.target.task.value
    }

    return (
        <HomeContainer>
        <form onSubmit={handleSubmit} action="">
            <FormContainer>
                <label htmlFor="task">Vou trabalhar em</label>
                <TaskInput 
                    placeholder="Dê um nome para o seu projeto" 
                    id="task"
                    name="task"
                    list="task-suggestions"
                />

                <datalist id="task-suggestions">
                    <option value="Projeto 01" />
                    <option value="Projeto 02" />
                    <option value="Projeto 03" />
                    <option value="Casa" />
                </datalist>

                <label htmlFor="minutesAmount">Durante</label>
                <MinutesAmountInput 
                    type="number" 
                    id="minutesAmount" 
                    placeholder="00" 
                    step={5}
                    min={5}
                    max={60}
                /> 

                <span>minutos.</span>
            </FormContainer>

            <CountdownContainer>
                <span>0</span>
                <span>0</span>
                <Separetor>:</Separetor>
                <span>0</span>
                <span>0</span>
            </CountdownContainer>

            <StartCountdownButton disabled={!task} type="submit">
                <Play size={24} />
                Começar
            </StartCountdownButton>
        </form>
        </HomeContainer>
    );
}