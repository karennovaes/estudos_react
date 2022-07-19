import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Cronometro.module.scss';
import Relogio from './Relogio';

interface Props {
    selecionado: ITarefa | undefined
}


export default function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    },[selecionado])


    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>

            <Botao>
                Começar!
            </Botao>
        </div>
    )
}