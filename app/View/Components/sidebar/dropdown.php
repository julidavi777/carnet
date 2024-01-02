<?php

namespace App\View\Components;

use Illuminate\View\Component;

class sidebarLink extends Component
{
    
    public $title; 
    public $iconClass; 

    public function __construct($title, $iconClass )
    {
        $this->title = $title;
        $this->iconClass = $iconClass;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.sidebar.dropdown');
    }
}
