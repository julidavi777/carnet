<button {{ $attributes->merge(['type' => 'submit', 'class' => 'grid justify-items-center w-full py-1 h-8 bg-blue-450 border border-transparent text-sm text-white tracking-tight hover:bg-blue-550 active:bg-blue-650 focus:outline-none focus:border-blue-550 disabled:opacity-25 transition ease-in-out duration-150']) }}>
    {{ $slot }}
</button>
