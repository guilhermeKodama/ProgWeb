<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "usuario".
 *
 * @property integer $id
 * @property string $login
 * @property string $senha
 * @property string $nome
 * @property string $email
 * @property string $tipo
 * @property string $data_cadastro
 */
class Usuario extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'usuario';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['login', 'senha', 'nome', 'email', 'tipo'], 'required'],
            [['tipo'], 'string'],
            [['data_cadastro'], 'safe'],
            [['login'], 'string', 'max' => 20],
            [['senha'], 'string', 'max' => 128],
            [['nome'], 'string', 'max' => 200],
            [['email'], 'string', 'max' => 50],
            [['login'], 'unique'],
            [['email'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'login' => 'Login',
            'senha' => 'Senha',
            'nome' => 'Nome',
            'email' => 'Email',
            'tipo' => 'Tipo',
            'data_cadastro' => 'Data de Hoje',
        ];
    }
}
