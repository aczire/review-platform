@extends('vox')

@section('content')

	<div class="container">

		<a href="{{ getLangUrl('/') }}" class="questions-back">
			<i class="fa fa-arrow-left"></i> 
			{{ trans('vox.common.questionnaires') }}
		</a>

		<div class="col-md-3">
			@include('vox.template-parts.profile-menu')
		</div>
		<div class="col-md-9">
        	@if($user->vox_address)
	  						
	  			@include('front.errors')
			  	
			  	<div class="panel panel-default personal-panel">
		            <div class="panel-heading">
		                <h3 class="panel-title bold">
	                		{{ trans('vox.page.profile.wallet-address-balance') }}
		                </h3>
		            </div>
		            <div class="panel-body">

			    		<p class="personal-description">
			    			{!! nl2br(trans('vox.page.profile.wallet-hint')) !!}
			    		</p>

			    		<input type="hidden" id="balance-address" value="{{ getLangUrl('profile/balance') }}" />

			    		<form class="form-horizontal" method="post" id="balance-form">
                    		{!! csrf_field() !!}

				            <div class="form-group">
				                <label class="col-md-3 control-label">
				                	{{ trans('vox.page.profile.wallet-address') }}
			                    </label>
				                <div class="col-md-9">
				                    <input class="form-control" id="vox-address" name="vox-address" type="text" value="{{ $user->vox_address }}">
				                </div>
				            </div>

				            <div class="form-group">
				                <label class="col-md-3 control-label">
				                	{{ trans('vox.page.profile.wallet-balance') }}
			                    </label>
				                <div class="col-md-9">
				                    <input class="form-control" id="my-balance" name="my-balance" type="text" value="" disabled="disabled">
				                </div>
				            </div>
							<div class="form-group">
								<div class="col-md-12">
			                        <button type="submit" name="update" class="btn btn-primary form-control">
			                        	{{ trans('vox.page.profile.wallet-submit') }}
			                        </button>
								</div>
							</div>

			            </form>

			  		</div>
			  	</div>


				<div class="panel panel-default personal-panel">
				    <div class="panel-heading">
				        <h3 class="panel-title bold">
			                {{ trans('vox.page.profile.wallet-withdraw-title') }}
				        </h3>
				    </div>
				    <div class="panel-body panel-body-wallet">
				    	<div id="has-wallet">

				    		@if(!$user->phone_verified && !$user->fb_id)
					    		<p class="personal-description">
									{!! nl2br(trans('vox.page.'.$current_page.'.verify-hint')) !!}
			                	</p>

				  				{!! Form::open(array('url' => getLangUrl('phone/save'), 'method' => 'post', 'class' => 'form-horizontal', 'id' => 'phone-verify-send-form' )) !!}
									<div class="form-group">
										<div class="col-md-3">
											{{ Form::select( 'phone_country', $phone_codes, $user->country_id, array('class' => 'form-control' )) }}
										</div>
										<div class="col-md-9">
											{{ Form::text( 'phone', $user->phone, array('class' => 'form-control', 'placeholder' => trans('vox.page.'.$current_page.'.verify-phone-placeholder') )) }}
										</div>
									</div>
									<div class="form-group">
										<div class="col-md-12">
		                                    <button type="submit" name="save-phone" class="btn btn-primary form-control btn-block">
		                                    	{{ trans('vox.page.'.$current_page.'.verify-phone-submit') }}
		                                    </button>
										</div>
									</div>
									<div class="alert alert-warning" id="phone-invalid" style="display: none;">
										{{ trans('vox.page.'.$current_page.'.verify-phone-invalid') }}
									</div>
									<div class="alert alert-warning" id="phone-taken" style="display: none;">
										{{ trans('vox.common.phone-already-used') }}
									</div>
				  				{!! Form::close() !!}

				  				{!! Form::open(array('url' => getLangUrl('phone/check'), 'method' => 'post', 'style' => 'display: none', 'class' => 'form-horizontal', 'id' => 'phone-verify-code-form' )) !!}
									<div class="form-group">
										<div class="col-md-12">
											<h3>
												{{ trans('vox.page.'.$current_page.'.verify-sms-sent') }}
											</h3>
										</div>
									</div>
									<div class="form-group">
										<div class="col-md-12">
											{{ Form::text( 'code', '', array('class' => 'form-control', 'placeholder' => trans('vox.page.'.$current_page.'.verify-code-placeholder') )) }}
										</div>
									</div>
									<div class="form-group">
										<div class="col-md-12">
		                                    <button type="submit" name="save-phone" class="btn btn-primary btn-block">
		                                    	{{ trans('vox.page.'.$current_page.'.verify-code-submit') }}
		                                    </button>
										</div>
									</div>
									<div class="alert alert-warning" style="display: none;">
										{{ trans('vox.page.'.$current_page.'.verify-code-invalid') }}
									</div>
				  				{!! Form::close() !!}
				    		@else
					    		<p class="personal-description">
					    			{!! nl2br(trans('vox.page.profile.wallet-withdraw-hint',[
					    				'balance' => $user->getVoxBalance()
					    			])) !!}
					    		</p>

					    		<form id="withdraw-form" class="form-horizontal" method="post" action="{{ getLangurl('profile/withdraw') }}">
	                    			{!! csrf_field() !!}

						            <div class="form-group">
						                <label class="col-md-3 control-label">
			                				{{ trans('vox.page.profile.wallet-withdraw-amount') }}
					                    </label>
						                <div class="col-md-9">
						                    <input class="form-control" id="wallet-amount" name="wallet-amount" type="text" value="">
						                </div>
						            </div>
									<div class="form-group">
										<div class="col-md-12">
					                        <button type="submit" name="update" class="btn btn-primary form-control">
					                        	{{ trans('vox.page.profile.wallet-withdraw-submit') }}
					                        </button>
										</div>
									</div>

			                        <div class="alert alert-success" style="display: none;" id="withdraw-success">
			                        	{{ trans('vox.page.profile.wallet-withdraw-success') }}
			                        	<a target="_blank">
			                        	</a>
			                        </div>
			                        <div class="alert alert-warning" style="display: none;" id="withdraw-error">
			                        	{{ trans('vox.page.profile.wallet-withdraw-error') }}
			                        	<div id="withdraw-reason">
			                        	</div>
			                        </div>
				    		@endif

				            </form>

				    	</div>
				    </div>
				</div>
        	@else
				<div class="panel panel-default personal-panel">
				    <div class="panel-heading">
				        <h3 class="panel-title bold">
			                {{ trans('vox.page.profile.wallet-new-address-title') }}
				        </h3>
				    </div>
				    <div class="panel-body panel-body-wallet">
				    	<div id="has-wallet">
				    		<p class="personal-description">
				    			{!! nl2br(trans('vox.page.profile.wallet-new-address-hint',[
				    				'link' => '<a target="_blank" href="'.url('MetaMaskInstructions.pdf').'">',
				    				'endlink' => '</a>',
				    			])) !!}
				    		</p>

				    		<form class="form-horizontal" method="post">
	                    		{!! csrf_field() !!}

					            <div class="form-group">
					                <label class="col-md-3 control-label">
					                	{{ trans('vox.page.profile.wallet-new-address-address') }}
				                    </label>
					                <div class="col-md-9">
					                    <input class="form-control" id="vox-address" name="vox-address" type="text" value="">
					                </div>
					            </div>
								<div class="form-group">
									<div class="col-md-12">
				                        <button type="submit" name="update" class="btn btn-primary form-control">
				                        	{{ trans('vox.page.profile.wallet-new-address-submit') }}
				                        </button>
									</div>
								</div>

				            </form>
	  						
	  						@include('front.errors')

				    	</div>
				    </div>
				</div>
        	@endif



		</div>
	</div>

@endsection