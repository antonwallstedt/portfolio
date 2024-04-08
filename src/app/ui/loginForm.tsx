"use client";

import { ArrowRightIcon, ExclamationCircleIcon, KeyIcon, LockClosedIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg px-6 pb-4 pt-8 bg-surface-variant">
        <h1 className="mb-3 text-2xl text-on-surface-variant">Please log in.</h1>
        <div className="w-full">
          <div>
            <label className="mb-3 mt-5 block text-sm font-medium text-on-surface-variant">Username</label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-outline text-on-background-light py-[9px] pl-10 text-sm outline-2"
                id="username"
                type="text"
                name="username"
                placeholder="Enter admin username"
                required
              />
              <UsersIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-on-background-light/50 peer-focus:text-on-background-light" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-sm font-medium text-on-surface-variant" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-outline py-[9px] pl-10 text-sm text-on-background-light outline-2"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-on-background-light/50 peer-focus:text-on-background-light" />
            </div>
          </div>
          <LoginButton />
        </div>
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-error" />
              <p className="text-sm text-error">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Login <LockClosedIcon className="ml-auto h-5 w-50" />
    </Button>
  );
}
