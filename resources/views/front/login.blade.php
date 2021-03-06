@extends('front')

@section('content')

	<div class="container">

			<div class="col-md-6 col-md-offset-3">

				<div class="panel panel-default">
				<div class="panel-body">
					
					<h1>
						{{ trans('front.page.'.$current_page.'.title') }}
					</h1>

					<form action="{{ getLangUrl('login') }}" method="post" class="form-horizontal">

						<div id="register-form">

							<div class="form-group">
							  	<div class="col-md-12 text-justify">
									{{ trans('front.page.'.$current_page.'.hint') }}
								</div>
							</div>
							<div class="form-group">
							  	<div class="col-md-12 text-center">
									<a class="btn btn-default" href="{{ getLangUrl('login/facebook') }}" title="{{ trans('front.page.'.$current_page.'.facebook') }}"><i class="fa fa-facebook"></i></a>
									<a class="btn btn-default" href="{{ getLangUrl('login/twitter') }}" title="{{ trans('front.page.'.$current_page.'.twitter') }}"><i class="fa fa-twitter"></i></a>
									<a class="btn btn-default" href="{{ getLangUrl('login/gplus') }}" title="{{ trans('front.page.'.$current_page.'.gplus') }}"><i class="fa fa-google-plus"></i></a>
								</div>
							</div>

							{!! csrf_field() !!}

							<div class="form-group">
							  	<label class="control-label col-md-3">
									{{ trans('front.page.'.$current_page.'.email') }}
							  	</label>
							  	<div class="col-md-9">
							    	<input type="text" name="email" value="{{ old('email') }}" class="form-control">
							    </div>
							</div>
						  	<div class="form-group">
							  	<label class="control-label col-md-3">
									{{ trans('front.page.'.$current_page.'.password') }}
								</label>
							  	<div class="col-md-9">
							    	<input type="password" name="password" class="form-control">
							    </div>
							</div>
							<div class="form-group">
							  	<label class="control-label col-md-3"></label>
							  	<label for="remember" class="col-md-9">
							    	<input id="remember" type="checkbox" name="remember" checked>
									{{ trans('front.page.'.$current_page.'.remember') }}
							  	</label>
							</div>
							<div class="form-group">
								<div class="col-md-12">
									<button class="btn btn-primary btn-block" type="submit">
										{{ trans('front.page.'.$current_page.'.submit') }}
									</button>
								</div>
							</div>

							@include('front.errors')

							<div class="form-group">
								<div class="col-md-12">
									<p class="divider">
										{{ trans('front.page.'.$current_page.'.alternative') }}
									</p>
								</div>
							</div>
							<div class="form-group">
								<div class="col-md-6">
									<a class="btn btn-default btn-block" href="{{ getLangUrl('register') }}">
										{{ trans('front.page.'.$current_page.'.register') }}											
									</a>
								</div>
								<div class="col-md-6">
					            	<a class="btn btn-default btn-block" href="{{ getLangUrl('forgot-password') }}">
					            		{{ trans('front.page.'.$current_page.'.recover') }}
					            	</a>								
								</div>
							</div>


						</div>

					</form>

				</div>
			</div>

					
		</div>
	</div>
	
@endsection