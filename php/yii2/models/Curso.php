<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "curso".
 *
 * @property integer $id
 * @property string $sigla
 * @property string $nome
 */
class Curso extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'curso';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['sigla'], 'required'],
            [['sigla'], 'string', 'max' => 4],
            [['nome'], 'string', 'max' => 50]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'sigla' => 'Sigla',
            'nome' => 'Nome',
        ];
    }
}
