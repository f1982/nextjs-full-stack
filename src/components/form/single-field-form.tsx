import { AnyNsRecord } from 'dns'
import { SaveIcon } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'

import { CopyButton } from '../molecule/copy-button'
import Spinner from '../molecule/spinner'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Textarea } from '../ui/textarea'

export default function SingleFieldForm({
  form,
  label,
  rows = 3,
  handleSubmit,
}: {
  form: UseFormReturn<{ value: string }>
  label: string
  rows?: number
  handleSubmit: (data: { value: string }) => void
}) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="value"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>
                {label} {fieldState.isDirty && '✏︎'}
              </FormLabel>
              <FormDescription>This is {label}</FormDescription>
              <FormControl>
                <Textarea
                  rows={rows}
                  disabled={form.formState.isSubmitting}
                  placeholder={label}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row items-center gap-3">
          <Button
            className="flex flex-row gap-3"
            disabled={form.formState.isSubmitting}
            type="submit">
            {form.formState.isSubmitting ? <Spinner /> : <SaveIcon />}
            <span>Save</span>
          </Button>
          <CopyButton content={form.getValues().value} />
        </div>
      </form>
    </Form>
  )
}
