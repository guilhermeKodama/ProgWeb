<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use app\controllers\CursoController;

/* @var $this yii\web\View */
/* @var $model app\models\Aluno */

$this->title = $model->id;
$model->id_curso = CursoController::getModel($model->id_curso)->nome;
$this->params['breadcrumbs'][] = ['label' => 'Alunos', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="aluno-view">

    <h1><?= Html::encode($model->nome) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'matricula',
            'nome',
            'sexo',
            'id_curso',
            'ano_ingresso',
        ],
    ]) ?>
    <?php echo "<p>Em nossa base , existem ".$count." alunos de ".$model->ano_ingresso."</p>"?>

</div>
