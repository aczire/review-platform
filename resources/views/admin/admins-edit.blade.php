@extends('admin')

@section('content')

<h1 class="page-header">{{ trans('admin.page.'.$current_page.'.edit.title') }}</h1>
<!-- end page-header -->

<div class="row">
    <div class="col-md-12">
        <div class="panel panel-inverse">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                </div>
                <h4 class="panel-title">{{ trans('admin.page.'.$current_page.'.edit.title') }}</h4>
            </div>
            <div class="panel-body">
                {!! Form::open(array('url' => url('cms/admins/edit/'.$item->id), 'method' => 'post', 'class' => 'form-horizontal')) !!}

            		{!! csrf_field() !!}

                    <div class="form-group">
                        <label class="col-md-2 control-label">ID</label>
                        <div class="col-md-4">
                        	{{ Form::text('id', $item->id, array('class' => 'form-control', 'disabled' => 'disabled') ) }}
                        </div>
                        <label class="col-md-2 control-label">{{ trans('admin.page.'.$current_page.'.comments') }}</label>
                        <div class="col-md-4">
                            {{ Form::text('comments', $item->comments, array('class' => 'form-control')) }}
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-md-2 control-label">{{ trans('admin.page.'.$current_page.'.username') }}</label>
                        <div class="col-md-4">
                        	{{ Form::text('username', $item->username, array('class' => 'form-control')) }}
                        </div>
                        <label class="col-md-2 control-label">{{ trans('admin.page.'.$current_page.'.password') }}</label>
                        <div class="col-md-4">
                            {{ Form::text('password', '', array('class' => 'form-control')) }}
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-md-2 control-label">{{ trans('admin.page.'.$current_page.'.email') }}</label>
                        <div class="col-md-4">
                            {{ Form::text('email', $item->email, array('class' => 'form-control')) }}
                        </div>
                    </div>

                    <div class="form-group">
                    	<div class="col-md-8"></div>
                        <div class="col-md-4">
                            <button type="submit" name="update" class="btn btn-block btn-sm btn-success form-control">{{ trans('admin.page.'.$current_page.'.save') }}</button>
                        </div>
                    </div>

            	{!! Form::close() !!}
            </div>
        </div>
    </div>
</div>

@endsection