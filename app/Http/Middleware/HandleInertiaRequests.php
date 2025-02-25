<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $authUser = null;

        // Check if user is authenticated
        if ($user = $request->user()) {
            // Load the user's data only if user is authenticated
            $authUser = $user->load('student');
        }

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $authUser,
            ],
        ];
    }
}
