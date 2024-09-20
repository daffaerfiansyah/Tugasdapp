<a {{ $attributes->merge([
        'class' => (request()->is($attributes->get('href')) 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white') . ' rounded-md px-3 py-2 text-sm font-medium'
    ]) }}
   aria-current="{{ request()->is($attributes->get('href')) ? 'page' : '' }}" 
   href="{{ $attributes->get('href') }}"> {{ $slot }} </a>
