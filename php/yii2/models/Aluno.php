<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "aluno".
 *
 * @property integer $id
 * @property integer $matricula
 * @property string $nome
 * @property string $sexo
 * @property integer $id_curso
 * @property integer $ano_ingresso
 */
class Aluno extends \yii\db\ActiveRecord{

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'aluno';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['matricula', 'id_curso', 'ano_ingresso','nome', 'sexo'],'required','message'=>'Este campo é obrigatório'],
            [['matricula', 'id_curso', 'ano_ingresso'], 'integer'],
            [['nome'], 'string', 'max' => 200],
            [['sexo'], 'string', 'max' => 1],
            [['matricula'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'matricula' => 'Matricula',
            'nome' => 'Nome',
            'sexo' => 'Sexo',
            'id_curso' => 'Id Curso',
            'ano_ingresso' => 'Ano Ingresso',
        ];
    }

    public function afterFind(){

        parent::afterFind();
        if($this->sexo == 'M')
            $this->sexo = 'Masculino';

        if($this->sexo == 'F')
            $this->sexo = 'Feminino';
    }
}
