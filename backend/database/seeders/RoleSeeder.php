<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $administratorRole = Role::create(['name' => 'admin']);
        $responsableRole = Role::create(['name' => 'responsable']);
        $testRole = Role::create(['name' => 'testRole']);

        Permission::create(['name' => 'admin.home'])->syncRoles([$administratorRole, $responsableRole, $testRole]);

        Permission::create(['name' => 'admin.customers.index'])->syncRoles([$administratorRole, $responsableRole]);
        Permission::create(['name' => 'admin.customers.store'])->syncRoles([$administratorRole]);
        Permission::create(['name' => 'admin.customers.update'])->syncRoles([$administratorRole]);
        Permission::create(['name' => 'admin.customers.watchDocuments'])->syncRoles([$administratorRole, $responsableRole]);

        Permission::create(['name' => 'admin.commercialOffers.index'])->syncRoles([$administratorRole, $responsableRole]);
        Permission::create(['name' => 'admin.commercialOffers.store'])->syncRoles([$administratorRole]);
        //Permission::create(['name' => 'admin.commercialOffers.update']);
        //Permission::create(['name' => 'admin.commercialOffers.watchDocuments']);
    }
}
